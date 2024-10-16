package com.hackathon.voicebank.voicebank_maker.Voicebank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@CrossOrigin("http://localhost:3000/")
@RestController
public class VoicebankResource {

    @Autowired
    private VoicebankDaoService service;

    public VoicebankResource(VoicebankDaoService service) {
        this.service = service;
    }

    // GET voicebanks
    @GetMapping("/voicebanks")
    public List<Voicebank> getAllVoicebanks() {
        return service.getVoicebanks();
    }

    //GET id of voicebank
    @GetMapping("/voicebanks/{id}")
    public Voicebank getVoicebank(@PathVariable int id) {
        Voicebank voicebank = service.getVoicebank(id);
        if (voicebank == null) {
            throw new UserNotFoundException("id:" + id);
        }
        return voicebank;
    }

    //DELETE id of voicebank
    @DeleteMapping("/voicebanks/{id}")
    public ResponseEntity<String> deleteVoicebank(@PathVariable int id) {
        try {
            service.deleteVoicebankById(id);  // Call the service to delete the voicebank
            return ResponseEntity.ok("Voicebank with ID " + id + " deleted successfully.");
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the voicebank.");
        }
    }

    //POST /voicebanks
    @PostMapping("/voicebanks")
    public ResponseEntity<Voicebank> createVoicebank(@RequestBody Voicebank voicebank) {
        Voicebank savedVoicebank = service.save(voicebank);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedVoicebank.getId())
                .toUri();
        return ResponseEntity.created(location).build();
    }

    // Method to handle file uploads
    @PostMapping("/voicebanks/upload")
    public ResponseEntity<String> uploadVoicebankFile(@RequestParam("file") MultipartFile file,
                                                      @RequestParam("name") String name) {
        try {
            service.saveVoicebankFile(name, file);
            return ResponseEntity.ok("File uploaded successfully: " + file.getOriginalFilename());
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to upload file: " + e.getMessage());
        }
    }
}
