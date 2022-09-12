package br.edu.ifes.col.locadorabackend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping (value="/locadora/resouces/atores")
	public ResponseEntity<Ator> incluirNovoAtor(@RequestBody Ator aux){
		
		
		try {
		
			//Ator ator = new Ator();
			//ator.setNome(null);
			
			System.out.println("-------------"+aux.getNome());
			
			aux = repositorioAtores.save(aux);
			
			return ResponseEntity.status(HttpStatus.CREATED).body(aux);
		
		}catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		//return 1;
		
	}
	
	@DeleteMapping (value="/locadora/resouces/atores/{id}")
	public ResponseEntity<Ator> excluirAtor(@PathVariable Long id){
		
		
		try {	
			
			Ator aux = repositorioAtores.getReferenceById(id);
			
			repositorioAtores.delete(aux);
			
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(null);
		
		}catch (Exception e) {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		
		
	}
	
}
