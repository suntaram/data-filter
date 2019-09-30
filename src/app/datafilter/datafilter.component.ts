import {Component, OnInit, ViewChild} from "@angular/core";
import {CSVModel} from "../model/csvmodel";
import {fileConstant} from "../FileConstant/fileConstant";
import {Router} from "@angular/router";
import {FileUtils} from "../fileutils/fileutils";

@Component({
  selector: 'app-home',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DataFilterComponent implements OnInit {

  private minNum;
  private maxNum;
  @ViewChild('fileImportInput')
  fileImportInput: any;


  csvRecords: CSVModel[] = [];

  constructor(private _router: Router,
              private FileUtils: FileUtils) {
  }

  ngOnInit() {
  }

  // METHOD CALLED WHEN CSV FILE IS IMPORTED
  fileChangeListener($event): void {

    var text = [];
    var target = $event.target || $event.srcElement;
    var files = target.files;

    if (fileConstant.validateHeaderAndRecordLengthFlag) {
      if (!this.FileUtils.isCSVFile(files[0])) {
        alert("Please import valid .csv file.");
        this.fileReset();
      }
    }

    var input = $event.target;
    var reader = new FileReader();
    reader.readAsText(input.files[0]);

    reader.onload = (data) => {
      let csvData = reader.result;
      let csvRecordsArray = csvData.split(/\r\n|\n/);

      var headerLength = -1;
      if (fileConstant.isHeaderPresentFlag) {
        let headersRow = this.FileUtils.getHeaderArray(csvRecordsArray, fileConstant.tokenDelimeter);
        headerLength = headersRow.length;
      }

      this.csvRecords = this.FileUtils.getDataRecordsArrayFromCSVFile(csvRecordsArray,
        headerLength, fileConstant.validateHeaderAndRecordLengthFlag, fileConstant.tokenDelimeter);

      if (this.csvRecords == null) {
        this.fileReset();
      }
      console.log(JSON.stringify(this.csvRecords));
    }

    reader.onerror = function () {
      alert('Unable to read ' + input.files[0]);
    };
  };

  fileReset() {
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }

  filterIssueCount() {
    this.csvRecords = this.csvRecords;
  }

}

