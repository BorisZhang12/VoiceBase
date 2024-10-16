package com.hackathon.voicebank.voicebank_maker.Voicebank;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.io.File;
import java.util.Arrays;

@Entity(name = "voicebank_details")
public class Voicebank {

    @Id
    @GeneratedValue
    private Integer id;
    @Size(min = 2, message = "Name must be at least 2 characters")
    private String name;
    private String type;
    @Lob
    private byte[] fileData;

    public Voicebank(Integer id, String name, String type, byte[] fileData) {
        super();
        this.id = id;
        this.name = name;
        this.type = type;
        this.fileData = fileData;
    }

    public Voicebank() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public @Size(min = 2, message = "Name must be at least 2 characters") String getName() {
        return name;
    }

    public void setName(@Size(min = 2, message = "Name must be at least 2 characters") String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getFileData() {
        return fileData;
    }

    public void setFileData(byte[] fileData) {
        this.fileData = fileData;
    }


    @Override
    public String toString() {
        return "Voicebank{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", fileData=" + Arrays.toString(fileData) +
                '}';
    }
}
