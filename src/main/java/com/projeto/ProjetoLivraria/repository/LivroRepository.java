/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */

package com.projeto.ProjetoLivraria.repository;

/**
 *
 * @author Leon
 */
import com.projeto.ProjetoLivraria.model.Livro;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Integer>{
    
    List<Livro> findByTituloContaining (String busca);
    
    List<Livro> findByAutorContaining (String busca);

}
