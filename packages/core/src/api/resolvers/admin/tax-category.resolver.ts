import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    CreateTaxCategoryMutationArgs,
    Permission,
    TaxCategoryQueryArgs,
    UpdateTaxCategoryMutationArgs,
} from '@vendure/common/lib/generated-types';

import { TaxCategory } from '../../../entity/tax-category/tax-category.entity';
import { TaxCategoryService } from '../../../service/services/tax-category.service';
import { RequestContext } from '../../common/request-context';
import { Allow } from '../../decorators/allow.decorator';
import { Ctx } from '../../decorators/request-context.decorator';

@Resolver('TaxCategory')
export class TaxCategoryResolver {
    constructor(private taxCategoryService: TaxCategoryService) {}

    @Query()
    @Allow(Permission.ReadSettings)
    taxCategories(@Ctx() ctx: RequestContext): Promise<TaxCategory[]> {
        return this.taxCategoryService.findAll();
    }

    @Query()
    @Allow(Permission.ReadSettings)
    async taxCategory(
        @Ctx() ctx: RequestContext,
        @Args() args: TaxCategoryQueryArgs,
    ): Promise<TaxCategory | undefined> {
        return this.taxCategoryService.findOne(args.id);
    }

    @Mutation()
    @Allow(Permission.CreateSettings)
    async createTaxCategory(@Args() args: CreateTaxCategoryMutationArgs): Promise<TaxCategory> {
        return this.taxCategoryService.create(args.input);
    }

    @Mutation()
    @Allow(Permission.UpdateSettings)
    async updateTaxCategory(@Args() args: UpdateTaxCategoryMutationArgs): Promise<TaxCategory> {
        return this.taxCategoryService.update(args.input);
    }
}
