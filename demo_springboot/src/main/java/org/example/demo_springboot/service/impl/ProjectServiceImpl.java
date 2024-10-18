package org.example.demo_springboot.service.impl;


import org.example.demo_springboot.mapper.ProjectMapper;
import org.example.demo_springboot.pojo.Project;
import org.example.demo_springboot.pojo.Reference;
import org.example.demo_springboot.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	ProjectMapper projectMapper;

	@Override
	public List<Project> getAllProject() {
		return projectMapper.getAllProject();
	}

	@Override
	public List<Reference> getReferenceByProjectId(Integer projectId) {
		return projectMapper.getReferenceByProjectId(projectId);
	}
}
