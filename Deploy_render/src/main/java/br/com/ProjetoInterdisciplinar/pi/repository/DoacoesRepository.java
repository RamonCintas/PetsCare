package br.com.ProjetoInterdisciplinar.pi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.ProjetoInterdisciplinar.pi.model.DoacoesModel;


public interface DoacoesRepository extends JpaRepository<DoacoesModel, Long>{

    DoacoesModel findById(long id);
    
}
