package com.recode.DiogoTurismo.model;

import lombok.*;
import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="contatos")
public class Contato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name= "nome_completo")
    private String nomeCompleto;

    @Column(name= "email_id")
    private String emailId;


    @Column(name= "mensagem_id")
    private String mensagemId;
}
