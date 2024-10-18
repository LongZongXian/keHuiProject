package org.example.demo_springboot.pojo;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Project {

	private Integer id;
	private String title;

	private String organization;

	private String describe;

	private LocalDateTime createTime;

	private String license;
	private String author;
	private String collaborates;

	private String fileName;
	private String fileUrl;
	private String imgUrl;
}
