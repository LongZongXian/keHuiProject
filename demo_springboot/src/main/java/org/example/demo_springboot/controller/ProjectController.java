package org.example.demo_springboot.controller;


import org.example.demo_springboot.pojo.Project;
import org.example.demo_springboot.pojo.Reference;
import org.example.demo_springboot.pojo.Result;
import org.example.demo_springboot.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/project")
public class ProjectController {

	@Autowired
	ProjectService projectService;

	@GetMapping("")
	public Result<List<Project>> getAllProject(){
		return Result.success(projectService.getAllProject());
	}

	@GetMapping("/reference")
	public Result<List<
			Reference>> getReferenceByProjectId(@RequestParam Integer projectId){
		return Result.success(projectService.getReferenceByProjectId(projectId));
	}

}
