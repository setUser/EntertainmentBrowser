class StorageArray {
    constructor (Storage, Name) {
        this.Storage = Storage;
        this.Name = Name;
        this.bufferArray = [];
        this.Storage.setItem(Name, this.getSize())
    }
    /**********************************************************************/
    getSize () {
        return Number(this.Storage.getItem(this.Name));
    }
    /**********************************************************************/
    setSize (size) {
        this.Storage.setItem(this.Name, Number(size));
    }
    /**********************************************************************/
    getBufferArray () {
        for (var i = 0; i < this.getSize(); i++) {
            this.bufferArray[i] = this.Storage.getItem(this.Name+i);
        }
    }
    /**********************************************************************/
    setBufferArray () {
        for (var i = 0; i < this.getSize(); i++) {
            this.Storage.setItem(this.Name+i, this.bufferArray[i]);
        }
    }
    /**********************************************************************/
    getItem (index) {
        index = Number(index);
        if (index < this.getSize() && index > -1) {
            return this.Storage.getItem(this.Name+index);
        }
        this.getBufferArray();
    }
    /**********************************************************************/
    setItem (index, value) {
        index = Number(index);
        if (index < this.getSize() && index > -1) {
            this.Storage.setItem(this.Name+index, value);
        }
        this.getBufferArray();
    }
    /**********************************************************************/
    addItem (index, value) {
        index = Number(index);
        if (index <= this.getSize() && index > -1) {
            if (this.getSize() == 0) {
                this.Storage.setItem(this.Name+0, value);
                this.Storage.setItem(this.Name, 1);
            }
            else {
                this.getBufferArray ();
                this.setSize(this.getSize()+1)
                var isAdded = false;
                for (var i = 0; i < this.getSize(); i++) {
                    if (i == index) {
                        this.Storage.setItem(this.Name+i, value);
                        isAdded = true;
                    }
                    else {
                        this.Storage.setItem(this.Name+i, isAdded ? this.bufferArray[i-1] : this.bufferArray[i]);
                    }
                }
                this.getBufferArray();
            }
            
        }
    }
    /**********************************************************************/
    removeItem (index) {
        index = Number(index);
        if (index < this.getSize() && index > -1) {
            this.getBufferArray ();
            this.setSize(this.getSize()-1)
            var isRemoved = false;
            for (var i = 0; i <  this.getSize(); i++) {
                if (i == index) {
                    isRemoved = true;
                }
                this.Storage.setItem(this.Name+i, isRemoved ? this.bufferArray[i+1] : this.bufferArray[i]);
            }
            this.getBufferArray();
        }   
    }
    /**********************************************************************/
    setSort (byNumber, invert) {
        this.getBufferArray();
        do {
            var unSorted = 0;
            for (var i = 0; i < this.getSize()-1; i++) {
                if (!invert) {
                    if (this.getbyNumber(byNumber, i) > this.getbyNumber(byNumber, i+1)) {
                        this.getInvert(i, i+1);
                        unSorted++;
                    }
                }
                else {
                    if (this.getbyNumber(byNumber, i) < this.getbyNumber(byNumber, i+1)) {
                        this.getInvert(i, i+1);
                        unSorted++;
                    }
                }
            }
        }
        while (unSorted != 0);
        this.setBufferArray();
    }
    getInvert (a, b) {
        var buffer = this.bufferArray[a];
        this.bufferArray [a] = this.bufferArray [b];
        this.bufferArray [b] = buffer;
    }
    getbyNumber (byNumber, i) {
        return byNumber ? Number(this.bufferArray[i]) : this.bufferArray[i];
    }
}