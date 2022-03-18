package com.recode.DiogoTurismo.repository;

import com.recode.DiogoTurismo.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContatoRepository extends JpaRepository<Contato,Long> {
    //Todos os métodos do banco de dados Bruto (CRUD)
}

