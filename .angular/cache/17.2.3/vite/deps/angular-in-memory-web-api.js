import {
  HttpBackend,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpXhrBackend
} from "./chunk-EWHC7ES4.js";
import {
  XhrFactory
} from "./chunk-I5YXHNAU.js";
import {
  Inject,
  Injectable,
  NgModule,
  Optional,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-6VT74OHH.js";
import "./chunk-N4WRLR3A.js";
import "./chunk-ZI7VXHZ3.js";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  first,
  from,
  map,
  of
} from "./chunk-Q3FDCHQN.js";

// node_modules/angular-in-memory-web-api/fesm2022/angular-in-memory-web-api.mjs
function delayResponse(response$, delayMs) {
  return new Observable((observer) => {
    let completePending = false;
    let nextPending = false;
    const subscription = response$.subscribe((value) => {
      nextPending = true;
      setTimeout(() => {
        observer.next(value);
        if (completePending) {
          observer.complete();
        }
      }, delayMs);
    }, (error) => setTimeout(() => observer.error(error), delayMs), () => {
      completePending = true;
      if (!nextPending) {
        observer.complete();
      }
    });
    return () => {
      return subscription.unsubscribe();
    };
  });
}
var STATUS = {
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANTENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418,
  UPGRADE_REQUIRED: 426,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  PROCESSING: 102,
  MULTI_STATUS: 207,
  IM_USED: 226,
  PERMANENT_REDIRECT: 308,
  UNPROCESSABLE_ENTRY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
var STATUS_CODE_INFO = {
  "100": {
    "code": 100,
    "text": "Continue",
    "description": '"The initial part of a request has been received and has not yet been rejected by the server."',
    "spec_title": "RFC7231#6.2.1",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.2.1"
  },
  "101": {
    "code": 101,
    "text": "Switching Protocols",
    "description": `"The server understands and is willing to comply with the client's request, via the Upgrade header field, for a change in the application protocol being used on this connection."`,
    "spec_title": "RFC7231#6.2.2",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.2.2"
  },
  "200": {
    "code": 200,
    "text": "OK",
    "description": '"The request has succeeded."',
    "spec_title": "RFC7231#6.3.1",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.3.1"
  },
  "201": {
    "code": 201,
    "text": "Created",
    "description": '"The request has been fulfilled and has resulted in one or more new resources being created."',
    "spec_title": "RFC7231#6.3.2",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.3.2"
  },
  "202": {
    "code": 202,
    "text": "Accepted",
    "description": '"The request has been accepted for processing, but the processing has not been completed."',
    "spec_title": "RFC7231#6.3.3",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.3.3"
  },
  "203": {
    "code": 203,
    "text": "Non-Authoritative Information",
    "description": `"The request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy."`,
    "spec_title": "RFC7231#6.3.4",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.3.4"
  },
  "204": {
    "code": 204,
    "text": "No Content",
    "description": '"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body."',
    "spec_title": "RFC7231#6.3.5",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.3.5"
  },
  "205": {
    "code": 205,
    "text": "Reset Content",
    "description": '"The server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server."',
    "spec_title": "RFC7231#6.3.6",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.3.6"
  },
  "206": {
    "code": 206,
    "text": "Partial Content",
    "description": `"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests's Range header field."`,
    "spec_title": "RFC7233#4.1",
    "spec_href": "https://tools.ietf.org/html/rfc7233#section-4.1"
  },
  "300": {
    "code": 300,
    "text": "Multiple Choices",
    "description": '"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers."',
    "spec_title": "RFC7231#6.4.1",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.4.1"
  },
  "301": {
    "code": 301,
    "text": "Moved Permanently",
    "description": '"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs."',
    "spec_title": "RFC7231#6.4.2",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.4.2"
  },
  "302": {
    "code": 302,
    "text": "Found",
    "description": '"The target resource resides temporarily under a different URI."',
    "spec_title": "RFC7231#6.4.3",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.4.3"
  },
  "303": {
    "code": 303,
    "text": "See Other",
    "description": '"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request."',
    "spec_title": "RFC7231#6.4.4",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.4.4"
  },
  "304": {
    "code": 304,
    "text": "Not Modified",
    "description": '"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false."',
    "spec_title": "RFC7232#4.1",
    "spec_href": "https://tools.ietf.org/html/rfc7232#section-4.1"
  },
  "305": {
    "code": 305,
    "text": "Use Proxy",
    "description": "*deprecated*",
    "spec_title": "RFC7231#6.4.5",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.4.5"
  },
  "307": {
    "code": 307,
    "text": "Temporary Redirect",
    "description": '"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI."',
    "spec_title": "RFC7231#6.4.7",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.4.7"
  },
  "400": {
    "code": 400,
    "text": "Bad Request",
    "description": '"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process."',
    "spec_title": "RFC7231#6.5.1",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.1"
  },
  "401": {
    "code": 401,
    "text": "Unauthorized",
    "description": '"The request has not been applied because it lacks valid authentication credentials for the target resource."',
    "spec_title": "RFC7235#6.3.1",
    "spec_href": "https://tools.ietf.org/html/rfc7235#section-3.1"
  },
  "402": {
    "code": 402,
    "text": "Payment Required",
    "description": "*reserved*",
    "spec_title": "RFC7231#6.5.2",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.2"
  },
  "403": {
    "code": 403,
    "text": "Forbidden",
    "description": '"The server understood the request but refuses to authorize it."',
    "spec_title": "RFC7231#6.5.3",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.3"
  },
  "404": {
    "code": 404,
    "text": "Not Found",
    "description": '"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists."',
    "spec_title": "RFC7231#6.5.4",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.4"
  },
  "405": {
    "code": 405,
    "text": "Method Not Allowed",
    "description": '"The method specified in the request-line is known by the origin server but not supported by the target resource."',
    "spec_title": "RFC7231#6.5.5",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.5"
  },
  "406": {
    "code": 406,
    "text": "Not Acceptable",
    "description": '"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation."',
    "spec_title": "RFC7231#6.5.6",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.6"
  },
  "407": {
    "code": 407,
    "text": "Proxy Authentication Required",
    "description": '"The client needs to authenticate itself in order to use a proxy."',
    "spec_title": "RFC7231#6.3.2",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.3.2"
  },
  "408": {
    "code": 408,
    "text": "Request Timeout",
    "description": '"The server did not receive a complete request message within the time that it was prepared to wait."',
    "spec_title": "RFC7231#6.5.7",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.7"
  },
  "409": {
    "code": 409,
    "text": "Conflict",
    "description": '"The request could not be completed due to a conflict with the current state of the resource."',
    "spec_title": "RFC7231#6.5.8",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.8"
  },
  "410": {
    "code": 410,
    "text": "Gone",
    "description": '"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent."',
    "spec_title": "RFC7231#6.5.9",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.9"
  },
  "411": {
    "code": 411,
    "text": "Length Required",
    "description": '"The server refuses to accept the request without a defined Content-Length."',
    "spec_title": "RFC7231#6.5.10",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.10"
  },
  "412": {
    "code": 412,
    "text": "Precondition Failed",
    "description": '"One or more preconditions given in the request header fields evaluated to false when tested on the server."',
    "spec_title": "RFC7232#4.2",
    "spec_href": "https://tools.ietf.org/html/rfc7232#section-4.2"
  },
  "413": {
    "code": 413,
    "text": "Payload Too Large",
    "description": '"The server is refusing to process a request because the request payload is larger than the server is willing or able to process."',
    "spec_title": "RFC7231#6.5.11",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.11"
  },
  "414": {
    "code": 414,
    "text": "URI Too Long",
    "description": '"The server is refusing to service the request because the request-target is longer than the server is willing to interpret."',
    "spec_title": "RFC7231#6.5.12",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.12"
  },
  "415": {
    "code": 415,
    "text": "Unsupported Media Type",
    "description": '"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method."',
    "spec_title": "RFC7231#6.5.13",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.13"
  },
  "416": {
    "code": 416,
    "text": "Range Not Satisfiable",
    "description": `"None of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges."`,
    "spec_title": "RFC7233#4.4",
    "spec_href": "https://tools.ietf.org/html/rfc7233#section-4.4"
  },
  "417": {
    "code": 417,
    "text": "Expectation Failed",
    "description": `"The expectation given in the request's Expect header field could not be met by at least one of the inbound servers."`,
    "spec_title": "RFC7231#6.5.14",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.14"
  },
  "418": {
    "code": 418,
    "text": "I'm a teapot",
    "description": '"1988 April Fools Joke. Returned by tea pots requested to brew coffee."',
    "spec_title": "RFC 2324",
    "spec_href": "https://tools.ietf.org/html/rfc2324"
  },
  "426": {
    "code": 426,
    "text": "Upgrade Required",
    "description": '"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol."',
    "spec_title": "RFC7231#6.5.15",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.5.15"
  },
  "500": {
    "code": 500,
    "text": "Internal Server Error",
    "description": '"The server encountered an unexpected condition that prevented it from fulfilling the request."',
    "spec_title": "RFC7231#6.6.1",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.6.1"
  },
  "501": {
    "code": 501,
    "text": "Not Implemented",
    "description": '"The server does not support the functionality required to fulfill the request."',
    "spec_title": "RFC7231#6.6.2",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.6.2"
  },
  "502": {
    "code": 502,
    "text": "Bad Gateway",
    "description": '"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request."',
    "spec_title": "RFC7231#6.6.3",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.6.3"
  },
  "503": {
    "code": 503,
    "text": "Service Unavailable",
    "description": '"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay."',
    "spec_title": "RFC7231#6.6.4",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.6.4"
  },
  "504": {
    "code": 504,
    "text": "Gateway Time-out",
    "description": '"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request."',
    "spec_title": "RFC7231#6.6.5",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.6.5"
  },
  "505": {
    "code": 505,
    "text": "HTTP Version Not Supported",
    "description": '"The server does not support, or refuses to support, the protocol version that was used in the request message."',
    "spec_title": "RFC7231#6.6.6",
    "spec_href": "https://tools.ietf.org/html/rfc7231#section-6.6.6"
  },
  "102": {
    "code": 102,
    "text": "Processing",
    "description": '"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it."',
    "spec_title": "RFC5218#10.1",
    "spec_href": "https://tools.ietf.org/html/rfc2518#section-10.1"
  },
  "207": {
    "code": 207,
    "text": "Multi-Status",
    "description": '"Status for multiple independent operations."',
    "spec_title": "RFC5218#10.2",
    "spec_href": "https://tools.ietf.org/html/rfc2518#section-10.2"
  },
  "226": {
    "code": 226,
    "text": "IM Used",
    "description": '"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance."',
    "spec_title": "RFC3229#10.4.1",
    "spec_href": "https://tools.ietf.org/html/rfc3229#section-10.4.1"
  },
  "308": {
    "code": 308,
    "text": "Permanent Redirect",
    "description": '"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET."',
    "spec_title": "RFC7238",
    "spec_href": "https://tools.ietf.org/html/rfc7238"
  },
  "422": {
    "code": 422,
    "text": "Unprocessable Entity",
    "description": '"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions."',
    "spec_title": "RFC5218#10.3",
    "spec_href": "https://tools.ietf.org/html/rfc2518#section-10.3"
  },
  "423": {
    "code": 423,
    "text": "Locked",
    "description": '"The source or destination resource of a method is locked."',
    "spec_title": "RFC5218#10.4",
    "spec_href": "https://tools.ietf.org/html/rfc2518#section-10.4"
  },
  "424": {
    "code": 424,
    "text": "Failed Dependency",
    "description": '"The method could not be performed on the resource because the requested action depended on another action and that action failed."',
    "spec_title": "RFC5218#10.5",
    "spec_href": "https://tools.ietf.org/html/rfc2518#section-10.5"
  },
  "428": {
    "code": 428,
    "text": "Precondition Required",
    "description": '"The origin server requires the request to be conditional."',
    "spec_title": "RFC6585#3",
    "spec_href": "https://tools.ietf.org/html/rfc6585#section-3"
  },
  "429": {
    "code": 429,
    "text": "Too Many Requests",
    "description": '"The user has sent too many requests in a given amount of time ("rate limiting")."',
    "spec_title": "RFC6585#4",
    "spec_href": "https://tools.ietf.org/html/rfc6585#section-4"
  },
  "431": {
    "code": 431,
    "text": "Request Header Fields Too Large",
    "description": '"The server is unwilling to process the request because its header fields are too large."',
    "spec_title": "RFC6585#5",
    "spec_href": "https://tools.ietf.org/html/rfc6585#section-5"
  },
  "451": {
    "code": 451,
    "text": "Unavailable For Legal Reasons",
    "description": '"The server is denying access to the resource in response to a legal demand."',
    "spec_title": "draft-ietf-httpbis-legally-restricted-status",
    "spec_href": "https://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status"
  },
  "506": {
    "code": 506,
    "text": "Variant Also Negotiates",
    "description": '"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."',
    "spec_title": "RFC2295#8.1",
    "spec_href": "https://tools.ietf.org/html/rfc2295#section-8.1"
  },
  "507": {
    "code": 507,
    "text": "Insufficient Storage",
    "description": 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request."',
    "spec_title": "RFC5218#10.6",
    "spec_href": "https://tools.ietf.org/html/rfc2518#section-10.6"
  },
  "511": {
    "code": 511,
    "text": "Network Authentication Required",
    "description": '"The client needs to authenticate to gain network access."',
    "spec_title": "RFC6585#6",
    "spec_href": "https://tools.ietf.org/html/rfc6585#section-6"
  }
};
function getStatusText(code) {
  return STATUS_CODE_INFO[code + ""].text || "Unknown Status";
}
function isSuccess(status) {
  return status >= 200 && status < 300;
}
var InMemoryDbService = class {
};
var InMemoryBackendConfigArgs = class {
};
var InMemoryBackendConfig = class _InMemoryBackendConfig {
  constructor(config = {}) {
    Object.assign(this, {
      // default config:
      caseSensitiveSearch: false,
      dataEncapsulation: false,
      delay: 500,
      delete404: false,
      passThruUnknownUrl: false,
      post204: true,
      post409: false,
      put204: true,
      put404: false,
      apiBase: void 0,
      host: void 0,
      rootPath: void 0
      // default value is actually set in InMemoryBackendService ctor
    }, config);
  }
  static {
    this.ɵfac = function InMemoryBackendConfig_Factory(t) {
      return new (t || _InMemoryBackendConfig)(ɵɵinject(InMemoryBackendConfigArgs));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _InMemoryBackendConfig,
      factory: _InMemoryBackendConfig.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemoryBackendConfig, [{
    type: Injectable
  }], () => [{
    type: InMemoryBackendConfigArgs
  }], null);
})();
function parseUri(str) {
  const URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  const m = URL_REGEX.exec(str);
  const uri = {
    source: "",
    protocol: "",
    authority: "",
    userInfo: "",
    user: "",
    password: "",
    host: "",
    port: "",
    relative: "",
    path: "",
    directory: "",
    file: "",
    query: "",
    anchor: ""
  };
  const keys = Object.keys(uri);
  let i = keys.length;
  while (i--) {
    uri[keys[i]] = m && m[i] || "";
  }
  return uri;
}
function removeTrailingSlash(path) {
  return path.replace(/\/$/, "");
}
var BackendService = class {
  constructor(inMemDbService, config = {}) {
    this.inMemDbService = inMemDbService;
    this.config = new InMemoryBackendConfig();
    this.db = {};
    this.requestInfoUtils = this.getRequestInfoUtils();
    const loc = this.getLocation("/");
    this.config.host = loc.host;
    this.config.rootPath = loc.path;
    Object.assign(this.config, config);
  }
  get dbReady() {
    if (!this.dbReadySubject) {
      this.dbReadySubject = new BehaviorSubject(false);
      this.resetDb();
    }
    return this.dbReadySubject.asObservable().pipe(first((r) => r));
  }
  /**
   * Process Request and return an Observable of Http Response object
   * in the manner of a RESTy web api.
   *
   * Expect URI pattern in the form :base/:collectionName/:id?
   * Examples:
   *   // for store with a 'customers' collection
   *   GET api/customers          // all customers
   *   GET api/customers/42       // the character with id=42
   *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or
   * 'J' GET api/customers.json/42  // ignores the ".json"
   *
   * Also accepts direct commands to the service in which the last segment of the apiBase is the
   * word "commands" Examples: POST commands/resetDb, GET/POST commands/config - get or (re)set the
   * config
   *
   *   HTTP overrides:
   *     If the injected inMemDbService defines an HTTP method (lowercase)
   *     The request is forwarded to that method as in
   *     `inMemDbService.get(requestInfo)`
   *     which must return either an Observable of the response type
   *     for this http library or null|undefined (which means "keep processing").
   */
  handleRequest(req) {
    return this.dbReady.pipe(concatMap(() => this.handleRequest_(req)));
  }
  handleRequest_(req) {
    const url = req.urlWithParams ? req.urlWithParams : req.url;
    const parser = this.bind("parseRequestUrl");
    const parsed = parser && parser(url, this.requestInfoUtils) || this.parseRequestUrl(url);
    const collectionName = parsed.collectionName;
    const collection = this.db[collectionName];
    const reqInfo = {
      req,
      apiBase: parsed.apiBase,
      collection,
      collectionName,
      headers: this.createHeaders({
        "Content-Type": "application/json"
      }),
      id: this.parseId(collection, collectionName, parsed.id),
      method: this.getRequestMethod(req),
      query: parsed.query,
      resourceUrl: parsed.resourceUrl,
      url,
      utils: this.requestInfoUtils
    };
    let resOptions;
    if (/commands\/?$/i.test(reqInfo.apiBase)) {
      return this.commands(reqInfo);
    }
    const methodInterceptor = this.bind(reqInfo.method);
    if (methodInterceptor) {
      const interceptorResponse = methodInterceptor(reqInfo);
      if (interceptorResponse) {
        return interceptorResponse;
      }
    }
    if (this.db[collectionName]) {
      return this.createResponse$(() => this.collectionHandler(reqInfo));
    }
    if (this.config.passThruUnknownUrl) {
      return this.getPassThruBackend().handle(req);
    }
    resOptions = this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Collection '${collectionName}' not found`);
    return this.createResponse$(() => resOptions);
  }
  /**
   * Add configured delay to response observable unless delay === 0
   */
  addDelay(response) {
    const d = this.config.delay;
    return d === 0 ? response : delayResponse(response, d || 500);
  }
  /**
   * Apply query/search parameters as a filter over the collection
   * This impl only supports RegExp queries on string properties of the collection
   * ANDs the conditions together
   */
  applyQuery(collection, query) {
    const conditions = [];
    const caseSensitive = this.config.caseSensitiveSearch ? void 0 : "i";
    query.forEach((value, name) => {
      value.forEach((v) => conditions.push({
        name,
        rx: new RegExp(decodeURI(v), caseSensitive)
      }));
    });
    const len = conditions.length;
    if (!len) {
      return collection;
    }
    return collection.filter((row) => {
      let ok = true;
      let i = len;
      while (ok && i) {
        i -= 1;
        const cond = conditions[i];
        ok = cond.rx.test(row[cond.name]);
      }
      return ok;
    });
  }
  /**
   * Get a method from the `InMemoryDbService` (if it exists), bound to that service
   */
  bind(methodName) {
    const fn = this.inMemDbService[methodName];
    return fn ? fn.bind(this.inMemDbService) : void 0;
  }
  bodify(data) {
    return this.config.dataEncapsulation ? {
      data
    } : data;
  }
  clone(data) {
    return JSON.parse(JSON.stringify(data));
  }
  collectionHandler(reqInfo) {
    let resOptions;
    switch (reqInfo.method) {
      case "get":
        resOptions = this.get(reqInfo);
        break;
      case "post":
        resOptions = this.post(reqInfo);
        break;
      case "put":
        resOptions = this.put(reqInfo);
        break;
      case "delete":
        resOptions = this.delete(reqInfo);
        break;
      default:
        resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.METHOD_NOT_ALLOWED, "Method not allowed");
        break;
    }
    const interceptor = this.bind("responseInterceptor");
    return interceptor ? interceptor(resOptions, reqInfo) : resOptions;
  }
  /**
   * Commands reconfigure the in-memory web api service or extract information from it.
   * Commands ignore the latency delay and respond ASAP.
   *
   * When the last segment of the `apiBase` path is "commands",
   * the `collectionName` is the command.
   *
   * Example URLs:
   *   commands/resetdb (POST) // Reset the "database" to its original state
   *   commands/config (GET)   // Return this service's config object
   *   commands/config (POST)  // Update the config (e.g. the delay)
   *
   * Usage:
   *   http.post('commands/resetdb', undefined);
   *   http.get('commands/config');
   *   http.post('commands/config', '{"delay":1000}');
   */
  commands(reqInfo) {
    const command = reqInfo.collectionName.toLowerCase();
    const method = reqInfo.method;
    let resOptions = {
      url: reqInfo.url
    };
    switch (command) {
      case "resetdb":
        resOptions.status = STATUS.NO_CONTENT;
        return this.resetDb(reqInfo).pipe(concatMap(() => this.createResponse$(
          () => resOptions,
          false
          /* no latency delay */
        )));
      case "config":
        if (method === "get") {
          resOptions.status = STATUS.OK;
          resOptions.body = this.clone(this.config);
        } else {
          const body = this.getJsonBody(reqInfo.req);
          Object.assign(this.config, body);
          this.passThruBackend = void 0;
          resOptions.status = STATUS.NO_CONTENT;
        }
        break;
      default:
        resOptions = this.createErrorResponseOptions(reqInfo.url, STATUS.INTERNAL_SERVER_ERROR, `Unknown command "${command}"`);
    }
    return this.createResponse$(
      () => resOptions,
      false
      /* no latency delay */
    );
  }
  createErrorResponseOptions(url, status, message) {
    return {
      body: {
        error: `${message}`
      },
      url,
      headers: this.createHeaders({
        "Content-Type": "application/json"
      }),
      status
    };
  }
  /**
   * Create a cold response Observable from a factory for ResponseOptions
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   * @param withDelay - if true (default), add simulated latency delay from configuration
   */
  createResponse$(resOptionsFactory, withDelay = true) {
    const resOptions$ = this.createResponseOptions$(resOptionsFactory);
    let resp$ = this.createResponse$fromResponseOptions$(resOptions$);
    return withDelay ? this.addDelay(resp$) : resp$;
  }
  /**
   * Create a cold Observable of ResponseOptions.
   * @param resOptionsFactory - creates ResponseOptions when observable is subscribed
   */
  createResponseOptions$(resOptionsFactory) {
    return new Observable((responseObserver) => {
      let resOptions;
      try {
        resOptions = resOptionsFactory();
      } catch (error) {
        const err = error.message || error;
        resOptions = this.createErrorResponseOptions("", STATUS.INTERNAL_SERVER_ERROR, `${err}`);
      }
      const status = resOptions.status;
      try {
        resOptions.statusText = status != null ? getStatusText(status) : void 0;
      } catch (e) {
      }
      if (status != null && isSuccess(status)) {
        responseObserver.next(resOptions);
        responseObserver.complete();
      } else {
        responseObserver.error(resOptions);
      }
      return () => {
      };
    });
  }
  delete({
    collection,
    collectionName,
    headers,
    id,
    url
  }) {
    if (id == null) {
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Missing "${collectionName}" id`);
    }
    const exists = this.removeById(collection, id);
    return {
      headers,
      status: exists || !this.config.delete404 ? STATUS.NO_CONTENT : STATUS.NOT_FOUND
    };
  }
  /**
   * Find first instance of item in collection by `item.id`
   * @param collection
   * @param id
   */
  findById(collection, id) {
    return collection.find((item) => item.id === id);
  }
  /**
   * Generate the next available id for item in this collection
   * Use method from `inMemDbService` if it exists and returns a value,
   * else delegates to `genIdDefault`.
   * @param collection - collection of items with `id` key property
   */
  genId(collection, collectionName) {
    const genId = this.bind("genId");
    if (genId) {
      const id = genId(collection, collectionName);
      if (id != null) {
        return id;
      }
    }
    return this.genIdDefault(collection, collectionName);
  }
  /**
   * Default generator of the next available id for item in this collection
   * This default implementation works only for numeric ids.
   * @param collection - collection of items with `id` key property
   * @param collectionName - name of the collection
   */
  genIdDefault(collection, collectionName) {
    if (!this.isCollectionIdNumeric(collection, collectionName)) {
      throw new Error(`Collection '${collectionName}' id type is non-numeric or unknown. Can only generate numeric ids.`);
    }
    let maxId = 0;
    collection.reduce((prev, item) => {
      maxId = Math.max(maxId, typeof item.id === "number" ? item.id : maxId);
    }, void 0);
    return maxId + 1;
  }
  get({
    collection,
    collectionName,
    headers,
    id,
    query,
    url
  }) {
    let data = collection;
    if (id != null && id !== "") {
      data = this.findById(collection, id);
    } else if (query) {
      data = this.applyQuery(collection, query);
    }
    if (!data) {
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `'${collectionName}' with id='${id}' not found`);
    }
    return {
      body: this.bodify(this.clone(data)),
      headers,
      status: STATUS.OK
    };
  }
  /**
   * Get location info from a url, even on server where `document` is not defined
   */
  getLocation(url) {
    if (!url.startsWith("http")) {
      const doc = typeof document === "undefined" ? void 0 : document;
      const base = doc ? doc.location.protocol + "//" + doc.location.host : "http://fake";
      url = url.startsWith("/") ? base + url : base + "/" + url;
    }
    return parseUri(url);
  }
  /**
   * get or create the function that passes unhandled requests
   * through to the "real" backend.
   */
  getPassThruBackend() {
    return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
  }
  /**
   * Get utility methods from this service instance.
   * Useful within an HTTP method override
   */
  getRequestInfoUtils() {
    return {
      createResponse$: this.createResponse$.bind(this),
      findById: this.findById.bind(this),
      isCollectionIdNumeric: this.isCollectionIdNumeric.bind(this),
      getConfig: () => this.config,
      getDb: () => this.db,
      getJsonBody: this.getJsonBody.bind(this),
      getLocation: this.getLocation.bind(this),
      getPassThruBackend: this.getPassThruBackend.bind(this),
      parseRequestUrl: this.parseRequestUrl.bind(this)
    };
  }
  indexOf(collection, id) {
    return collection.findIndex((item) => item.id === id);
  }
  /** Parse the id as a number. Return original value if not a number. */
  parseId(collection, collectionName, id) {
    if (!this.isCollectionIdNumeric(collection, collectionName)) {
      return id;
    }
    const idNum = parseFloat(id);
    return isNaN(idNum) ? id : idNum;
  }
  /**
   * return true if can determine that the collection's `item.id` is a number
   * This implementation can't tell if the collection is empty so it assumes NO
   * */
  isCollectionIdNumeric(collection, collectionName) {
    return !!(collection && collection[0]) && typeof collection[0].id === "number";
  }
  /**
   * Parses the request URL into a `ParsedRequestUrl` object.
   * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
   *
   * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
   *   When apiBase=undefined and url='http://localhost/api/collection/42'
   *     {base: 'api/', collectionName: 'collection', id: '42', ...}
   *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
   *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
   *   When apiBase='/' and url='http://localhost/collection'
   *     {base: '/', collectionName: 'collection', id: undefined, ...}
   *
   * The actual api base segment values are ignored. Only the number of segments matters.
   * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
   *
   * To replace this default method, assign your alternative to your
   * InMemDbService['parseRequestUrl']
   */
  parseRequestUrl(url) {
    try {
      const loc = this.getLocation(url);
      let drop = (this.config.rootPath || "").length;
      let urlRoot = "";
      if (loc.host !== this.config.host) {
        drop = 1;
        urlRoot = loc.protocol + "//" + loc.host + "/";
      }
      const path = loc.path.substring(drop);
      const pathSegments = path.split("/");
      let segmentIndex = 0;
      let apiBase;
      if (this.config.apiBase == null) {
        apiBase = pathSegments[segmentIndex++];
      } else {
        apiBase = removeTrailingSlash(this.config.apiBase.trim());
        if (apiBase) {
          segmentIndex = apiBase.split("/").length;
        } else {
          segmentIndex = 0;
        }
      }
      apiBase += "/";
      let collectionName = pathSegments[segmentIndex++];
      collectionName = collectionName && collectionName.split(".")[0];
      const id = pathSegments[segmentIndex++];
      const query = this.createQueryMap(loc.query);
      const resourceUrl = urlRoot + apiBase + collectionName + "/";
      return {
        apiBase,
        collectionName,
        id,
        query,
        resourceUrl
      };
    } catch (err) {
      const msg = `unable to parse url '${url}'; original error: ${err.message}`;
      throw new Error(msg);
    }
  }
  // Create entity
  // Can update an existing entity too if post409 is false.
  post({
    collection,
    collectionName,
    headers,
    id,
    req,
    resourceUrl,
    url
  }) {
    const item = this.clone(this.getJsonBody(req));
    if (item.id == null) {
      try {
        item.id = id || this.genId(collection, collectionName);
      } catch (err) {
        const emsg = err.message || "";
        if (/id type is non-numeric/.test(emsg)) {
          return this.createErrorResponseOptions(url, STATUS.UNPROCESSABLE_ENTRY, emsg);
        } else {
          return this.createErrorResponseOptions(url, STATUS.INTERNAL_SERVER_ERROR, `Failed to generate new id for '${collectionName}'`);
        }
      }
    }
    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, `Request id does not match item.id`);
    } else {
      id = item.id;
    }
    const existingIx = this.indexOf(collection, id);
    const body = this.bodify(item);
    if (existingIx === -1) {
      collection.push(item);
      headers.set("Location", resourceUrl + "/" + id);
      return {
        headers,
        body,
        status: STATUS.CREATED
      };
    } else if (this.config.post409) {
      return this.createErrorResponseOptions(url, STATUS.CONFLICT, `'${collectionName}' item with id='${id} exists and may not be updated with POST; use PUT instead.`);
    } else {
      collection[existingIx] = item;
      return this.config.post204 ? {
        headers,
        status: STATUS.NO_CONTENT
      } : (
        // successful; no content
        {
          headers,
          body,
          status: STATUS.OK
        }
      );
    }
  }
  // Update existing entity
  // Can create an entity too if put404 is false.
  put({
    collection,
    collectionName,
    headers,
    id,
    req,
    url
  }) {
    const item = this.clone(this.getJsonBody(req));
    if (item.id == null) {
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `Missing '${collectionName}' id`);
    }
    if (id && id !== item.id) {
      return this.createErrorResponseOptions(url, STATUS.BAD_REQUEST, `Request for '${collectionName}' id does not match item.id`);
    } else {
      id = item.id;
    }
    const existingIx = this.indexOf(collection, id);
    const body = this.bodify(item);
    if (existingIx > -1) {
      collection[existingIx] = item;
      return this.config.put204 ? {
        headers,
        status: STATUS.NO_CONTENT
      } : (
        // successful; no content
        {
          headers,
          body,
          status: STATUS.OK
        }
      );
    } else if (this.config.put404) {
      return this.createErrorResponseOptions(url, STATUS.NOT_FOUND, `'${collectionName}' item with id='${id} not found and may not be created with PUT; use POST instead.`);
    } else {
      collection.push(item);
      return {
        headers,
        body,
        status: STATUS.CREATED
      };
    }
  }
  removeById(collection, id) {
    const ix = this.indexOf(collection, id);
    if (ix > -1) {
      collection.splice(ix, 1);
      return true;
    }
    return false;
  }
  /**
   * Tell your in-mem "database" to reset.
   * returns Observable of the database because resetting it could be async
   */
  resetDb(reqInfo) {
    this.dbReadySubject && this.dbReadySubject.next(false);
    const db = this.inMemDbService.createDb(reqInfo);
    const db$ = db instanceof Observable ? db : typeof db.then === "function" ? from(db) : of(db);
    db$.pipe(first()).subscribe((d) => {
      this.db = d;
      this.dbReadySubject && this.dbReadySubject.next(true);
    });
    return this.dbReady;
  }
};
var HttpClientBackendService = class _HttpClientBackendService extends BackendService {
  constructor(inMemDbService, config, xhrFactory) {
    super(inMemDbService, config);
    this.xhrFactory = xhrFactory;
  }
  handle(req) {
    try {
      return this.handleRequest(req);
    } catch (error) {
      const err = error.message || error;
      const resOptions = this.createErrorResponseOptions(req.url, STATUS.INTERNAL_SERVER_ERROR, `${err}`);
      return this.createResponse$(() => resOptions);
    }
  }
  getJsonBody(req) {
    return req.body;
  }
  getRequestMethod(req) {
    return (req.method || "get").toLowerCase();
  }
  createHeaders(headers) {
    return new HttpHeaders(headers);
  }
  createQueryMap(search) {
    const map2 = /* @__PURE__ */ new Map();
    if (search) {
      const params = new HttpParams({
        fromString: search
      });
      params.keys().forEach((p) => map2.set(p, params.getAll(p) || []));
    }
    return map2;
  }
  createResponse$fromResponseOptions$(resOptions$) {
    return resOptions$.pipe(map((opts) => new HttpResponse(opts)));
  }
  createPassThruBackend() {
    try {
      return new HttpXhrBackend(this.xhrFactory);
    } catch (ex) {
      ex.message = "Cannot create passThru404 backend; " + (ex.message || "");
      throw ex;
    }
  }
  static {
    this.ɵfac = function HttpClientBackendService_Factory(t) {
      return new (t || _HttpClientBackendService)(ɵɵinject(InMemoryDbService), ɵɵinject(InMemoryBackendConfig, 8), ɵɵinject(XhrFactory));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _HttpClientBackendService,
      factory: _HttpClientBackendService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientBackendService, [{
    type: Injectable
  }], () => [{
    type: InMemoryDbService
  }, {
    type: InMemoryBackendConfigArgs,
    decorators: [{
      type: Inject,
      args: [InMemoryBackendConfig]
    }, {
      type: Optional
    }]
  }, {
    type: XhrFactory
  }], null);
})();
function httpClientInMemBackendServiceFactory(dbService, options, xhrFactory) {
  return new HttpClientBackendService(dbService, options, xhrFactory);
}
var HttpClientInMemoryWebApiModule = class _HttpClientInMemoryWebApiModule {
  /**
   *  Redirect the Angular `HttpClient` XHR calls
   *  to in-memory data store that implements `InMemoryDbService`.
   *  with class that implements InMemoryDbService and creates an in-memory database.
   *
   *  Usually imported in the root application module.
   *  Can import in a lazy feature module too, which will shadow modules loaded earlier
   *
   * @param dbCreator - Class that creates seed data for in-memory database. Must implement
   *     InMemoryDbService.
   * @param [options]
   *
   * @example
   * HttpInMemoryWebApiModule.forRoot(dbCreator);
   * HttpInMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
   */
  static forRoot(dbCreator, options) {
    return {
      ngModule: _HttpClientInMemoryWebApiModule,
      providers: [{
        provide: InMemoryDbService,
        useClass: dbCreator
      }, {
        provide: InMemoryBackendConfig,
        useValue: options
      }, {
        provide: HttpBackend,
        useFactory: httpClientInMemBackendServiceFactory,
        deps: [InMemoryDbService, InMemoryBackendConfig, XhrFactory]
      }]
    };
  }
  /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
  static forFeature(dbCreator, options) {
    return _HttpClientInMemoryWebApiModule.forRoot(dbCreator, options);
  }
  static {
    this.ɵfac = function HttpClientInMemoryWebApiModule_Factory(t) {
      return new (t || _HttpClientInMemoryWebApiModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _HttpClientInMemoryWebApiModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HttpClientInMemoryWebApiModule, [{
    type: NgModule
  }], null, null);
})();
var InMemoryWebApiModule = class _InMemoryWebApiModule {
  /**
   *  Redirect BOTH Angular `Http` and `HttpClient` XHR calls
   *  to in-memory data store that implements `InMemoryDbService`.
   *  with class that implements InMemoryDbService and creates an in-memory database.
   *
   *  Usually imported in the root application module.
   *  Can import in a lazy feature module too, which will shadow modules loaded earlier
   *
   * @param dbCreator - Class that creates seed data for in-memory database. Must implement
   *     InMemoryDbService.
   * @param [options]
   *
   * @example
   * InMemoryWebApiModule.forRoot(dbCreator);
   * InMemoryWebApiModule.forRoot(dbCreator, {useValue: {delay:600}});
   */
  static forRoot(dbCreator, options) {
    return {
      ngModule: _InMemoryWebApiModule,
      providers: [{
        provide: InMemoryDbService,
        useClass: dbCreator
      }, {
        provide: InMemoryBackendConfig,
        useValue: options
      }, {
        provide: HttpBackend,
        useFactory: httpClientInMemBackendServiceFactory,
        deps: [InMemoryDbService, InMemoryBackendConfig, XhrFactory]
      }]
    };
  }
  /**
   *
   * Enable and configure the in-memory web api in a lazy-loaded feature module.
   * Same as `forRoot`.
   * This is a feel-good method so you can follow the Angular style guide for lazy-loaded modules.
   */
  static forFeature(dbCreator, options) {
    return _InMemoryWebApiModule.forRoot(dbCreator, options);
  }
  static {
    this.ɵfac = function InMemoryWebApiModule_Factory(t) {
      return new (t || _InMemoryWebApiModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _InMemoryWebApiModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InMemoryWebApiModule, [{
    type: NgModule
  }], null, null);
})();
export {
  BackendService,
  HttpClientBackendService,
  HttpClientInMemoryWebApiModule,
  InMemoryBackendConfig,
  InMemoryBackendConfigArgs,
  InMemoryDbService,
  InMemoryWebApiModule,
  STATUS,
  STATUS_CODE_INFO,
  getStatusText,
  httpClientInMemBackendServiceFactory,
  isSuccess,
  parseUri,
  removeTrailingSlash
};
/*! Bundled license information:

angular-in-memory-web-api/fesm2022/angular-in-memory-web-api.mjs:
  (**
   * @license Angular v0.0.0
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=angular-in-memory-web-api.js.map
