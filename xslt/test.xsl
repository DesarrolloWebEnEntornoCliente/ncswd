<?xml version="1.0" encoding="ISO-8859-1"?>
  <xsl:stylesheet version="1.0"
                  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" indent="yes"/>
  <xsl:template match="/">
    <html>
    <body>
      <h2>My test</h2>
      <table border="1">
        <tr bgcolor="#FFcd32">
          <th>Entry</th>
          <th>Comment</th>
        </tr>
        <xsl:for-each select="page/entry">
        <tr>
          <td><xsl:value-of select="title"/></td>
          <td><xsl:value-of select="comment"/></td>
        </tr>
        </xsl:for-each>
      </table>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

