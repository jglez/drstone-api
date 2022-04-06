import "../APISnippet.css"

function APISnippet(props) {

  function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

  function APISnippetPath(_props) {
    const pathStyle = _props.type.toLowerCase() === 'get' ? "path-type get-type" : "path-type post-type"
    return (
      <div className="snippet-container path-container">
        <div className={pathStyle}>{_props.type}</div>
        <div className="path-url">{_props.path}</div>
      </div>
    )
  }

  function APISnippetReturn(_props) {
    return (
      <div className="snippet-container return-container">
        <div className="return-data">{syntaxHighlight(JSON.stringify(_props.data, null, '\t')).split(/\n/).map(line => {
          return <div className="line">{line.split(/\t/).map(spaced_line => {
            return <div style={{ marginRight: '35px' }} dangerouslySetInnerHTML={{__html: spaced_line}}/>
          })}</div>
        })}</div>
      </div>
    )
  }

  return (
    <>
      <APISnippetPath type={props.type} path={props.path} />
      <APISnippetReturn data={props.data} />
    </>
  );
}

export default APISnippet;
