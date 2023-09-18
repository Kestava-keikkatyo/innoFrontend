import React from 'react'
import { useTranslation } from 'react-i18next'
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const CustomerContractFormPdf = () => {
  const { t } = useTranslation()

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald',
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald',
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman',
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  })

  return (
    <Document>
      <Page size='A4' style={styles.body}>
        <Text>{t('form1Header')}</Text>
        <Text>{t('form1Text1')}</Text>
        <Text>{t('form1Text2')}</Text>
        <Text>{t('form1Text3')}</Text>
        <Text>{t('form1Text4')}</Text>
        <Text>{t('form1Text5')}</Text>
        <Text>{t('form1Text6')}</Text>
        <Text>{t('form1Text7')}</Text>
        <Text>{t('form1Text8')}</Text>
        <Text>{t('form1Text9')}</Text>
        <Text>{t('form1Text10')}</Text>
        <Text>{t('form1Text11')}</Text>
        <Text>{t('form1Text12')}</Text>
        <Text>{t('form1Text13')}</Text>
        <Text>{t('form1Check1')}</Text>
        <Text>{t('form1Check2')}</Text>
        <Text>{t('form1Check3')}</Text>
        <Text>{t('form1Check4')}</Text>
        <Text>{t('form1Check5')}</Text>
        <Text>04.10.2023 {t('form1ByDate')}</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  )
}

export default CustomerContractFormPdf
