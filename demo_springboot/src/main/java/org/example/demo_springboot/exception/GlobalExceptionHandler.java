package org.example.demo_springboot.exception;


import org.example.demo_springboot.pojo.Result;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(Exception.class)
	public Result excetionHandler(Exception e){
		e.printStackTrace();
		return Result.error(StringUtils.hasLength(e.getMessage()) ?
				e.getMessage() : "操作失败");

	}
}
