package com.hackathon.voicebank.voicebank_maker.Voicebank;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
@Component
public class VoicebankDaoService {

    @Autowired
    private FileRepository fileRepository;

    private static List<Voicebank> voicebanks = new ArrayList<>();

    private static int count = 0;

    public List<Voicebank> getVoicebanks() {
        return fileRepository.findAll();
    }

    public Voicebank getVoicebank(int id) {
        Predicate<? super Voicebank> predicate = voicebank -> voicebank.getId().equals(id);
        return voicebanks.stream().filter(predicate).findFirst().orElse(null);
    }

    public Voicebank save(Voicebank voicebank) {
        voicebank.setId(++count);
        voicebanks.add(voicebank);
        return voicebank;
    }

    public void deleteVoicebankById(int id) {
        if (!fileRepository.existsById(id)) {
            throw new UserNotFoundException("Voicebank with ID " + id + " not found.");
        }
        fileRepository.deleteById(id);
    }

    public Voicebank saveVoicebankFile(String name, MultipartFile file) throws IOException {
        Voicebank voicebank = new Voicebank();
        voicebank.setName(name);
        voicebank.setType(file.getContentType());
        voicebank.setFileData(file.getBytes());  // Save the file as byte array

        return fileRepository.save(voicebank);
    }
}
