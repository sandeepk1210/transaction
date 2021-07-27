export interface Transaction {
    transactionId?: string,
    assetClass?: string,
    supportFacility?: string,
    dealType?: string,
    dataDate?: string,
    currentHolding?: number,
    issuer?: string,
    issuerType?: string,
    linkedPublicTransaction?: string,
    capitalStructure?: string,
    underlyingRiskWeight?: number
}