package org.example.demo_springboot.controller;

import org.example.demo_springboot.pojo.Result;
import org.example.demo_springboot.utils.AliossUtil;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@RestController
public class FileUploadController {
	@PostMapping("/upload")
	public Result<String> upload(@RequestBody MultipartFile file) throws Exception {
		String originalFilename = file.getOriginalFilename();
		String filename = UUID.randomUUID().toString()+originalFilename.substring(originalFilename.lastIndexOf("."));
//		file.transferTo(new File("D:\\graduate\\"+filename));
		String url = AliossUtil.uploadFile(originalFilename, file.getInputStream());
		return Result.success(url);
	}
}
