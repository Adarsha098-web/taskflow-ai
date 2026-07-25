package com.adarsha.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adarsha.backend.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}