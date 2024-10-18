package org.example.demo_springboot.pojo;

import lombok.Data;

@Data
public class Reference {

	private Integer id;
	private String text;

	private String title;
	private String link;

	private String abstractContent;

	private Integer projectId;

}
