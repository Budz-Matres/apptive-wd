// Inside Folders.jsx
import React from "react";
import Folder from "./Folder";

const Folders = ({ folders, onDeleteFolder, onEditFolder }) => {
  return (
    <div className="row">
      {folders.map((folder) => (
        <div key={folder.folder_id} className="col-md-6 col-lg-4 col-xl-3 mb-3">
          <Folder
            key={folder.folder_id}
            folderId={folder.folder_id}
            folderName={folder.folder_name}
            description={folder.description}
            favorited={folder.favorited}
            noOfNotes={folder.no_of_notes || 0}
            createdAt={folder.created_at}
            modifiedAt={folder.modified_at}
            onDeleteFolder={onDeleteFolder}
            onEditFolder={onEditFolder}
          />
        </div>
      ))}
    </div>
  );
};

export default Folders;