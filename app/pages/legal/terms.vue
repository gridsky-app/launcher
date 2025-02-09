<script setup lang="ts">
</script>

<template>
  <v-container class="fill-height">
    <v-row class="fill-height">
      <v-col class="fill-height overflow-y-auto scrollbar-invisible" :md="9" :offset-md="2">

        <div>

          <AppBreadcrumbs title="Terms and Conditions" />

          <section>
            <h2>Terms of Service</h2>
            <p>Welcome to Gridsky! By using our platform, you agree to these Terms of Service. Please read them carefully.</p>
          </section>

          <section>
            <h2>1. Service Description</h2>
            <p>
              Gridsky provides a client for accessing the Bluesky decentralized network. We do not host or control any content
              displayed within the Bluesky ecosystem. Your use of Gridsky is subject to these Terms and the policies of Bluesky.
            </p>
          </section>

          <section>
            <h2>2. Account and User Responsibilities</h2>
            <p>
              - You are responsible for complying with all applicable laws when using Gridsky.<br>
              - We do not store personal data, but you are responsible for the security of your own Bluesky account.<br>
              - Any misuse of the platform, including attempts to bypass restrictions or exploit vulnerabilities, may result
              in loss of access.
            </p>
          </section>

          <section>
            <h2>3. Premium Features</h2>
            <p>
              Gridsky offers premium features, such as appearance settings, which can be unlocked through:<br>
              - **Patreon:** Users must subscribe and join our Discord server, where they must set their Discord username to
              match their Gridsky username to receive premium access.<br>
              - **Web3:** Users can make a one-time on-chain payment for lifetime access via our smart contract.
              Gridsky only verifies whether an account has an active premium status and does not store any payment details.
            </p>
          </section>

          <section>
            <h2>4. Payments and Refunds</h2>
            <p>
              - All payments for premium features are final. No refunds are provided.<br>
              - If you cancel your Patreon subscription, your premium status will be revoked at the end of the billing cycle.<br>
              - Web3 lifetime memberships are permanent and do not expire.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              Gridsky is provided "as is," without warranties of any kind. We are not responsible for any issues arising
              from the use of Bluesky, third-party services, or any technical failures related to Web3 transactions.
            </p>
          </section>

          <section>
            <h2>6. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of Gridsky after changes means you accept the new Terms.
            </p>
          </section>

          <section>
            <h2>7. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us through our official channels.
            </p>
          </section>

          <section>
            <h2>8. Copyright and Intellectual Property</h2>
            <p>
              All content, branding, and software related to Gridsky are © 2025 Gridsky. All rights reserved.
              Unauthorized reproduction, modification, distribution, or any form of exploitation of our intellectual
              property is strictly prohibited.
            </p>
          </section>


        </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-col {
  display: grid;
  align-items: center;
}

section {
  &:not(:last-child) {
    margin: 0 0 24px 0;
  }

  h2 {
    margin-bottom: 12px;
  }

  p {
    opacity: 0.8;
  }
}
</style>