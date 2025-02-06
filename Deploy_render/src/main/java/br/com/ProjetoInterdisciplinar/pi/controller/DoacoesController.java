package br.com.ProjetoInterdisciplinar.pi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.ProjetoInterdisciplinar.pi.model.DoacoesModel;
import br.com.ProjetoInterdisciplinar.pi.repository.DoacoesRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class DoacoesController {

    @Autowired
    private DoacoesRepository doacaoRepository;

    @RequestMapping(value = "/doacoes", method = RequestMethod.GET)
    public List<DoacoesModel> listar(){
        return doacaoRepository.findAll();
    }

    @RequestMapping(value = "/cadastrar", method = RequestMethod.POST)
    public DoacoesModel gravarDoacao(@RequestBody DoacoesModel doacoesModel) {
        return doacaoRepository.save(doacoesModel);
    }

    @RequestMapping(value = "/editar/{id}", method = RequestMethod.PUT)
    public DoacoesModel editarDoacao(@RequestBody DoacoesModel doacoesModel) {
        return doacaoRepository.save(doacoesModel);
    }

    @RequestMapping(value = "/doacao/{id}", method = RequestMethod.DELETE)
    public void excluirDoacao(@PathVariable long id) {
        doacaoRepository.deleteById(id);
    }

    @GetMapping("/doacoes/{id}")
    public DoacoesModel selecionarPeloCodigo(@PathVariable long id){
        return doacaoRepository.findById(id);
    }

}
