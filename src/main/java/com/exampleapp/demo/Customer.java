package com.exampleapp.demo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Customer {
    @Id
    String userName;
    String password;

    public Customer(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }

    public Customer() {
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
