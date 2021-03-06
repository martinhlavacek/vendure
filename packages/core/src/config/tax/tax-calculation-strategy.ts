import { RequestContext } from '../../api/common/request-context';
import { TaxCategory, Zone } from '../../entity';
import { TaxCalculationResult } from '../../service/helpers/tax-calculator/tax-calculator';
import { TaxRateService } from '../../service/services/tax-rate.service';

/**
 * @description
 * The arguments passed the the `calculate` method of the configured {@link TaxCalculationStrategy}.
 *
 * @docsCategory tax
 */
export interface TaxCalculationArgs {
    inputPrice: number;
    taxCategory: TaxCategory;
    activeTaxZone: Zone;
    ctx: RequestContext;
    taxRateService: TaxRateService;
}

/**
 * @description
 * Defines how taxes are calculated based on the input price, tax zone and current request context.
 *
 * @docsCategory tax
 */
export interface TaxCalculationStrategy {
    calculate(args: TaxCalculationArgs): TaxCalculationResult;
}
