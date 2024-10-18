package org.example.demo_springboot.mapper;



import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.example.demo_springboot.pojo.Project;
import org.example.demo_springboot.pojo.Reference;

import java.util.List;


@Mapper
public interface ProjectMapper {
	@Select("select * from project")
	List<Project> getAllProject();

	@Select("select * from reference where project_id=#{projectId}")
	List<Reference> getReferenceByProjectId(Integer projectId);
}
