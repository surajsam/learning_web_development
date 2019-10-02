package com.exampleapp.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;


@RestController
@CrossOrigin("*")
public class RestControllerApi {

    @Autowired
    CustomerRepo repo;

    @GetMapping(value = "/hello")
    public String hello() {
        return "hi";
    }

    @GetMapping(value = "/add")
    public void add(){
        repo.save(new Customer("user1","suraj"));
        repo.save(new Customer("user2","windy"));
        repo.save(new Customer("user3","asraf"));
    }

    @GetMapping(value = "/customer")
    public List<Customer>  getCustomers() {
        return repo.findAll();
    }

    @PostMapping(value = "/login")
    public boolean validateUser(@RequestBody Customer customer){
        List<Customer> customers = repo.findAll();
        for (Customer varCustomer : customers) {
            if (varCustomer.userName.equals(customer.userName)
                    && varCustomer.password.equals(customer.password)) {
                return true;
            }
        }
        return false;
    }
}
