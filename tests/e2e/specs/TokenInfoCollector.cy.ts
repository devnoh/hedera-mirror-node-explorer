/*-
 *
 * Hedera Mirror Node Explorer
 *
 * Copyright (C) 2021 - 2024 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// https://docs.cypress.io/api/table-of-contents

describe('TokenInfoCollector', () => {

    const timestamp = "1673974382.950855003"

    it('should display token name', () => {
        cy.visit('mainnet/transaction/' + timestamp)
        cy.url().should('include', '/mainnet/transaction/')

        cy.get('#entityId')
            .find('span')
            .contains("Apollo Dog Test")
    })

})
