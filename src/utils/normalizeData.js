/**
 * In the future this will handle different formatting types for backup apps
 */

export default function normalizeData(rawData) {
  // TODO: handle different formats of the data
  return rawData.smses.sms.map((item) => {
    const { body, type } = item._attributes;

    return {
      body,
      date: item._attributes.readable_date,
      sender: type === '1' ? item._attributes.contact_name : 'You',
      sentReceived: type === '1' ? 'received' : 'sent',
    };
  });
}
