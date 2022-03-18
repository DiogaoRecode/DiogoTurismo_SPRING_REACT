package com.recode.DiogoTurismo.controller;

import com.recode.DiogoTurismo.exception.ResourceNotFoundException;
import com.recode.DiogoTurismo.model.Contato;
import com.recode.DiogoTurismo.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")   //conecta o reat ao java,mesmo sendo de portas diferentes
@RestController
@RequestMapping ("/api/v1/contatos")
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    @GetMapping
    public List<Contato> getAllContatos(){

        return contatoRepository.findAll();
    }

    //Criação do formulário no REST API
    @PostMapping
    public Contato createContato(@RequestBody Contato contato){
        return contatoRepository.save(contato);
    }

    //Buscar o formulário pelo ID REST API
    @GetMapping("{id}")
    public ResponseEntity<Contato>getContatoById(@PathVariable long id){
        Contato contato = contatoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Contato não existe no sistema com o id: "+id));
        return ResponseEntity.ok(contato);
    }

    //Atualizando o formulario REST API
    @PutMapping("{id}")
    public ResponseEntity<Contato> updateContato(@PathVariable long id, @RequestBody Contato contatoDetails) {

       Contato updateContato = contatoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Não existe formulário com o id: "+id));

        updateContato.setNomeCompleto(contatoDetails.getNomeCompleto());
        updateContato.setEmailId(contatoDetails.getEmailId());
        updateContato.setMensagemId(contatoDetails.getMensagemId());

        contatoRepository.save(updateContato);

        return ResponseEntity.ok(updateContato);
    }

    // DELETANDO O FORMULÁRIO NO REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteContato(@PathVariable long id){

       Contato contato = contatoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        contatoRepository.delete(contato);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
