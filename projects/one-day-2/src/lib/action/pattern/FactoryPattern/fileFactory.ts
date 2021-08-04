
export class FileItem {
    public obj = {
        fileName: '',
        format: '',
        size: '',
        createDate: 0,
        complete: 0,
        ower: {
            userName: '',
            userId: 0
        },
        //
        statusValue: '',
        action: '',
        status: '',
    }
}


export interface File {
    format(): string;
}


export class DRIFile implements File {

    public format(): string {

        console.log('Dri format');

        return '.dri';
    }
}



/**
 *  File Factory
 */

export class FileFactory {
    getShape(fileType: string) {

        if (!fileType) {
            return;
        }

        if (fileType == "DRIFile") {
            return new DRIFile();
        }


        return;

    }
}

