package br.edu.ifes.col.locadorabackend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifes.col.locadorabackend.domain.AtorRepository;
import br.edu.ifes.col.locadorabackend.domain.Ator;


@Service
@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class AtorResource {
	
	@Autowired
	private AtorRepository repositorioAtores;

	@GetMapping (value="/locadora/resouces/atores")
	public List<Ator> obterAtores(){
		
		return repositorioAtores.findAll();
		
	}
	
	
}
