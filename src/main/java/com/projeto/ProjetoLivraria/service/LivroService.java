/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.projeto.ProjetoLivraria.service;

/**
 *
 * @author Leon
 */
import com.projeto.ProjetoLivraria.model.Livro;
import com.projeto.ProjetoLivraria.repository.LivroRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LivroService {

    @Autowired
    LivroRepository livroRepository;

    public Livro criarLivro(Livro livro) {

        livro.setId(null);
        livroRepository.save(livro);
        return livro;
    }

    public Livro getLivroId(Integer livroId) {
        return livroRepository.findById(livroId).orElseThrow();
    }

    public List<Livro> listarTodosLivros() {
        return livroRepository.findAll();
    }

    public void deletarLivro(Integer livroId) {

        Livro livro = getLivroId(livroId);
        livroRepository.deleteById(livro.getId());

    }

    public Livro atualizarEstoque(Integer livroID, Livro livroRequest) {

        Livro livro = getLivroId(livroID);

        livro.setUnidades(livroRequest.getUnidades());

        livroRepository.save(livro);

        return livro;

    }

    public List<Livro> buscarLivrosPorTitulo(String busca) {
        return livroRepository.findByTituloContaining(busca);
    }

    public List<Livro> buscarLivrosPorAutor(String busca) {
        return livroRepository.findByAutorContaining(busca);
    }

}
