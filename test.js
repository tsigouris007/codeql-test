function vuln1(cmd) {
  eval(cmd);
}

function vuln2(html) {
  $("#main").append(html);
}

function vuln3(html) {
  $("#main").html(html);
}

function vuln4(html) {
  renderScanStatusResponse = () => {
    const {
      scanStatus: {
        next_scan_message: nextScan,
        in_process_message: inProcess,
        error_message: error
      }
    } = this.props;

    if (error) {
      return <p dangerouslySetInnerHTML={{ __html: error }} />;
    }
  }
}
