package edu.unomaha.docusign.document.rest;

import edu.unomaha.docusign.document.ejb.DocumentServiceImpl;
import edu.unomaha.docusign.document.entities.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DocumentEndpoint {

    @Autowired
    DocumentServiceImpl service;

    @RequestMapping("/builder")
    public List<Document> byBuilder(@RequestParam String builderName) {
        return service.getDocumentsByBuilder(builderName);
    }

    @RequestMapping("/all")
    public List<Document> getAllDocuments() {
        return service.getAllDocuments();
    }

}