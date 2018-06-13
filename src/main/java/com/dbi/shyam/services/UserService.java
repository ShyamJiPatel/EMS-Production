package com.dbi.shyam.services;

import com.dbi.shyam.entities.User;

public interface UserService {

	User findById(Long id);

	boolean saveUser(User user);

	void updateUser(User user);

	void deleteUserById(Long id);

	Iterable<User> findAllUsers();

	void deleteAllUsers();

	boolean isUserExist(Long id);

	User login(String email, String pwd);

}
