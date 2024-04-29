export interface GoogleProfileResponse {
  resourceName: string;
  etag: string;
  names: Name[];
  photos: Photo[];
  emailAddresses: EmailAddress[];
}

interface Name {
  metadata: Metadata;
  displayName: string;
  familyName: string;
  givenName: string;
  displayNameLastFirst: string;
  unstructuredName: string;
}

interface Photo {
  metadata: Metadata;
  url: string;
  default: boolean;
}

interface EmailAddress {
  metadata: Metadata;
  value: string;
}

interface Metadata {
  primary: boolean;
  source: Source;
  sourcePrimary?: boolean;
  verified?: boolean;
}

interface Source {
  type: string;
  id: string;
}
