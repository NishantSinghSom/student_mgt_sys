package net.fernandosalas.ems.controller;

import net.fernandosalas.ems.dto.AuthRequest;
import net.fernandosalas.ems.dto.CourseDto;
import net.fernandosalas.ems.entity.UserInfo;
import net.fernandosalas.ems.service.JwtService;
import net.fernandosalas.ems.service.AddService;
import net.fernandosalas.ems.service.CourseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/add")
@CrossOrigin(origins = "http://localhost:3000")
public class AddController {

    @Autowired
    private AddService service;
    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    /*
    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }



    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Product> getAllTheProducts() {
        return service.getProducts();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public Product getProductById(@PathVariable int id) {
        return service.getProduct(id);
    }
*/
    @PostMapping("/new")
    public ResponseEntity<?> addNewUser(@RequestBody UserInfo userInfo) {
        try {
            String result = service.addUser(userInfo);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Registration failed: " + e.getMessage());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(authRequest.getUsername());
                return ResponseEntity.ok(token);
            }
            return ResponseEntity.status(401).body("Authentication failed");
        } catch (Exception e) {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
