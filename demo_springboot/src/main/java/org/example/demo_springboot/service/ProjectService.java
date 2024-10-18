package org.example.demo_springboot.service;



import org.example.demo_springboot.pojo.Project;
import org.example.demo_springboot.pojo.Reference;

import java.util.List;

public interface ProjectService {
	List<Project> getAllProject();
	List<Reference> getReferenceByProjectId(Integer projectId);
}
