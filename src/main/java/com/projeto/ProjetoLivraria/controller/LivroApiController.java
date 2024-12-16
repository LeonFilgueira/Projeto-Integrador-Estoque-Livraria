/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.projeto.ProjetoLivraria.controller;

import com.projeto.ProjetoLivraria.model.Livro;
import com.projeto.ProjetoLivraria.service.LivroService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Leon
 */

@RestController
@RequestMapping("/livro")
public class LivroApiController {
    
    @Autowired
    LivroService livroService;
    
    
    
    @GetMapping("/listar")
    public ResponseEntity<List> getAllLivros (){
        List<Livro> livros = livroService.listarTodosLivros();
        return new ResponseEntity<>(livros, HttpStatus.OK);
    }
    
    @GetMapping("/buscar")
    public ResponseEntity<List<Livro>> getLivrosTitulo (@RequestParam String busca){
        
        List<Livro> livros = livroService.buscarLivrosPorTitulo(busca);
        return new ResponseEntity<>(livros, HttpStatus.OK); 
    }
    
    @GetMapping("/buscar-por-autor")
    public ResponseEntity<List<Livro>> getLivrosAutor (@RequestParam String busca){
        
        List<Livro> livros = livroService.buscarLivrosPorAutor(busca);
        return new ResponseEntity<>(livros, HttpStatus.OK); 
    }
    
    
    @PostMapping("/adicionar")
    public ResponseEntity<Livro> addLivro (@RequestBody Livro livro){
        var novoLivro = livroService.criarLivro(livro);
        return new ResponseEntity<>(novoLivro, HttpStatus.CREATED); 
        
    }
    
    @GetMapping("/pesquisar/{id}")
    public ResponseEntity<Livro> getLivroById (@PathVariable Integer id){
        
        Livro livro = livroService.getLivroId(id);
        return new ResponseEntity<>(livro, HttpStatus.OK);
    }
    
    @DeleteMapping("/deletar/{id}")
    public ResponseEntity deletarLivro (@PathVariable Integer id){
        livroService.deletarLivro(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    @PutMapping("/atualizar/{id}")
    public ResponseEntity<Livro> atualizarEstoque (@PathVariable Integer id, @RequestBody Livro livro){
        
        var livroAtualizado = livroService.atualizarEstoque(id, livro);
        
        return new ResponseEntity<>(livroAtualizado, HttpStatus.OK);
    }
    
}
