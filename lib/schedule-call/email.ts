export interface LeadDetails {
  name: string;
  email: string;
  preferredDate: string;
  phone?: string;
  message?: string;
}

export interface LeadEmail {
  subject: string;
  text: string;
  html: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function buildLeadEmail(lead: LeadDetails): LeadEmail {
  const rows: Array<[label: string, value: string]> = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Preferred date", lead.preferredDate],
  ];
  if (lead.phone) rows.push(["Phone", lead.phone]);
  if (lead.message) rows.push(["What they are building", lead.message]);

  const subject = `Call request from ${lead.name} for ${lead.preferredDate}`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = [
    "<h2>New call request</h2>",
    "<table>",
    ...rows.map(
      ([label, value]) =>
        `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value)}</td></tr>`,
    ),
    "</table>",
  ].join("\n");

  return { subject, text, html };
}
