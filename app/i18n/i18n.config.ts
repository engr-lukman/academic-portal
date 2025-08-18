export default defineI18nConfig(() => ({
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "USD",
        notation: "standard",
      },
      decimal: {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
      numeric: {
        style: "decimal",
        useGrouping: false,
      },
    },
    bn: {
      currency: {
        style: "currency",
        currency: "BDT",
        useGrouping: true,
        currencyDisplay: "symbol",
      },
      decimal: {
        style: "decimal",
        minimumSignificantDigits: 3,
        maximumSignificantDigits: 5,
      },
      percent: {
        style: "percent",
        useGrouping: false,
      },
      numeric: {
        style: "decimal",
        useGrouping: false,
      },
    },
  },
  datetimeFormats: {
    en: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      },
      time: {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      },
      datetime: {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      },
      fullDateTime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      },
      year: {
        year: "numeric",
      },
      month: {
        month: "long",
        year: "numeric",
      },
    },
    bn: {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
        numberingSystem: "beng",
      },
      long: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        numberingSystem: "beng",
      },
      time: {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        numberingSystem: "beng",
      },
      datetime: {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        numberingSystem: "beng",
      },
      fullDateTime: {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
        numberingSystem: "beng",
      },
      year: {
        year: "numeric",
        numberingSystem: "beng",
      },
      month: {
        month: "long",
        year: "numeric",
        numberingSystem: "beng",
      },
    },
  },
}));
