export type Client = {
  id: string;
  name: string;
  logo: string;
  website?: string;
};

export const clients: Client[] = [
  {
    id: "ict-ministry",
    name: "Ministry of ICT",
    logo: "/clients/ict-ministry.png",
    website: "https://ictd.gov.bd",
  },
  {
    id: "ddi",
    name: "DDI",
    logo: "/clients/ddi.png",
    website: "https://digitaldemocracyinitiative.net/",
  },
  {
    id: "buet",
    name: "BUET",
    logo: "/clients/buet.png",
    website: "https://www.buet.ac.bd/web/",
  },
  {
    id: "afk-tech",
    name: "AFK Tech Limited",
    logo: "/clients/afk-tech.png",
    website: "https://www.afktechltd.com/",
  },
  {
    id: "gadget-citybd",
    name: "Gadget City BD",
    logo: "/clients/gadget-citybd.png",
    website: "https://www.gadgetcitybd.com/",
  },
  {
    id: "kashful-foundation",
    name: "Kashful Foundation",
    logo: "/clients/kashful-foundation.png",
    website: "https://kashful.org/",
  },
  {
    id: "seenjoy-academy",
    name: "Seenjoy Academy",
    logo: "/clients/seenjoy-academy.png",
    // website: "", // Add Seenjoy Academy's website URL here
  },
  {
    id: "whiteboard-initiatives",
    name: "Whiteboard Initiatives",
    logo: "/clients/whiteboard-initiatives.png",
    website: "https://wbinitiatives.org/",
  },
];
