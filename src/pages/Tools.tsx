
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Download, Wrench, Upload } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type FileItem = {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  // In a real app, this would be a URL to the file
  downloadUrl: string;
};

const Tools = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  // Sample files (in a real app, these would come from a backend)
  const [files, setFiles] = useState<FileItem[]>([
    {
      id: '1',
      name: 'seo_analysis_tool.zip',
      size: '2.4 MB',
      type: 'application/zip',
      uploadedAt: '2025-04-25',
      downloadUrl: '#'
    },
    {
      id: '2',
      name: 'keyword_research_template.xlsx',
      size: '1.2 MB',
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      uploadedAt: '2025-04-22',
      downloadUrl: '#'
    },
    {
      id: '3',
      name: 'content_calendar.pdf',
      size: '3.5 MB',
      type: 'application/pdf',
      uploadedAt: '2025-04-20',
      downloadUrl: '#'
    }
  ]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  // TODO: Backend Integration - Connect this function to backend file storage
  const handleUpload = () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file first",
        variant: "destructive",
      });
      return;
    }

    // Generate a fake file object to simulate upload
    const newFile: FileItem = {
      id: Date.now().toString(),
      name: selectedFile.name,
      size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
      type: selectedFile.type,
      uploadedAt: new Date().toISOString().split('T')[0],
      downloadUrl: '#'
    };

    setFiles([newFile, ...files]);
    setSelectedFile(null);
    
    toast({
      title: "File Uploaded",
      description: "Your file has been successfully uploaded.",
    });
    
    // Reset file input
    const fileInput = document.getElementById('file-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  // TODO: Backend Integration - Connect this function to backend file storage
  const handleDownload = (file: FileItem) => {
    // In a real app, this would download the actual file
    toast({
      title: "Download Started",
      description: `Downloading ${file.name}...`,
    });
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.includes('zip')) {
      return '📦';
    } else if (fileType.includes('pdf')) {
      return '📄';
    } else if (fileType.includes('spreadsheet') || fileType.includes('excel')) {
      return '📊';
    } else if (fileType.includes('image')) {
      return '🖼️';
    } else {
      return '📎';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-flaskiss-primary to-flaskiss-accent bg-clip-text text-transparent">
              Free Tools & Resources
            </h1>
            <p className="text-lg text-flaskiss-muted">
              Download helpful resources or share your own tools with the community
            </p>
          </div>
          
          {/* Upload section */}
          <Card className="mb-8 border-flaskiss-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-flaskiss-primary/20 rounded-full">
                  <Upload className="h-5 w-5 text-flaskiss-primary" />
                </div>
                <CardTitle>Share a Resource</CardTitle>
              </div>
              <CardDescription>Upload a file to share with the community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="flex-grow">
                  <input
                    type="file"
                    id="file-upload"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-flaskiss-text
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-md file:border-0
                      file:text-sm file:font-semibold
                      file:bg-flaskiss-primary/10 file:text-flaskiss-primary
                      hover:file:bg-flaskiss-primary/20 file:cursor-pointer
                      border border-flaskiss-light rounded-md"
                  />
                </div>
                <Button 
                  onClick={handleUpload} 
                  className="bg-flaskiss-primary hover:bg-flaskiss-secondary min-w-[100px]"
                >
                  Upload
                </Button>
              </div>
              {selectedFile && (
                <div className="mt-4 p-3 bg-flaskiss-light rounded-md">
                  <p className="text-sm text-flaskiss-text">
                    Selected: <span className="font-semibold">{selectedFile.name}</span> 
                    ({(selectedFile.size / (1024 * 1024)).toFixed(1)} MB)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Files list */}
          <Card className="border-flaskiss-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-flaskiss-primary/20 rounded-full">
                  <Wrench className="h-5 w-5 text-flaskiss-primary" />
                </div>
                <CardTitle>Available Resources</CardTitle>
              </div>
              <CardDescription>Browse and download community resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y divide-gray-200">
                {files.map((file) => (
                  <div key={file.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{getFileIcon(file.type)}</div>
                      <div>
                        <p className="font-medium text-flaskiss-text">{file.name}</p>
                        <p className="text-sm text-flaskiss-muted">
                          {file.size} • Uploaded on {file.uploadedAt}
                        </p>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleDownload(file)} 
                      variant="outline" 
                      className="border-flaskiss-primary text-flaskiss-primary hover:bg-flaskiss-primary/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
