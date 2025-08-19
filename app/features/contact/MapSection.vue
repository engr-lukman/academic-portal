<template>
  <section class="section-padding bg-gray-50">
    <div class="container mx-auto">
      <div class="fade-in mb-16 text-center">
        <h2 class="title-2 mb-4 text-gray-800">
          {{ $t("contact.location.title") }}
        </h2>
        <p class="paragraph-1 mx-auto max-w-3xl text-gray-600">
          {{ $t("contact.location.subtitle") }}
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <!-- Map Placeholder -->
        <div class="lg:col-span-2">
          <AppCard
            variant="elevated"
            class="overflow-hidden"
          >
            <div
              class="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200"
            >
              <!-- Map placeholder - in a real app, you'd integrate with Google Maps or similar -->
              <div class="flex h-full items-center justify-center">
                <div class="text-center">
                  <Icon
                    name="ph:map-pin-duotone"
                    class="mx-auto mb-4 h-16 w-16 text-blue-600"
                  />
                  <h3 class="title-4 mb-2 text-blue-900">Interactive Map</h3>
                  <p class="paragraph-2 text-blue-700">
                    {{ $t("contact.location.map_description") }}
                  </p>
                  <AppButton
                    variant="primary"
                    size="sm"
                    icon="ph:navigation-arrow-duotone"
                    class="mt-4"
                  >
                    {{ $t("contact.location.get_directions") }}
                  </AppButton>
                </div>
              </div>

              <!-- Map overlay with campus info -->
              <div class="absolute right-4 bottom-4 left-4">
                <div class="rounded-lg bg-white/90 p-4 backdrop-blur-sm">
                  <div class="flex items-center gap-3">
                    <Icon
                      name="ph:map-pin-duotone"
                      class="h-6 w-6 text-blue-600"
                    />
                    <div>
                      <h4 class="font-semibold text-gray-800">
                        {{ $t("app.title") }}
                      </h4>
                      <p class="text-sm text-gray-600">
                        {{ $t("contact.info.address.value") }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AppCard>
        </div>

        <!-- Transportation & Directions -->
        <div class="space-y-6">
          <AppCard
            variant="elevated"
            hover
          >
            <div class="p-6">
              <div class="mb-4 flex items-center gap-3">
                <Icon
                  name="ph:car-duotone"
                  class="h-6 w-6 text-blue-600"
                />
                <h3 class="title-4 text-gray-800">
                  {{ $t("contact.transportation.driving.title") }}
                </h3>
              </div>
              <p class="paragraph-2 mb-4 text-gray-600">
                {{ $t("contact.transportation.driving.description") }}
              </p>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:clock-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{
                    $t("contact.transportation.driving.parking")
                  }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:currency-dollar-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ $t("contact.transportation.driving.cost") }}</span>
                </div>
              </div>
            </div>
          </AppCard>

          <AppCard
            variant="elevated"
            hover
          >
            <div class="p-6">
              <div class="mb-4 flex items-center gap-3">
                <Icon
                  name="ph:bus-duotone"
                  class="h-6 w-6 text-green-600"
                />
                <h3 class="title-4 text-gray-800">
                  {{ $t("contact.transportation.public.title") }}
                </h3>
              </div>
              <p class="paragraph-2 mb-4 text-gray-600">
                {{ $t("contact.transportation.public.description") }}
              </p>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:train-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ $t("contact.transportation.public.metro") }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:bus-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{ $t("contact.transportation.public.bus") }}</span>
                </div>
              </div>
            </div>
          </AppCard>

          <AppCard
            variant="elevated"
            hover
          >
            <div class="p-6">
              <div class="mb-4 flex items-center gap-3">
                <Icon
                  name="ph:airplane-duotone"
                  class="h-6 w-6 text-purple-600"
                />
                <h3 class="title-4 text-gray-800">
                  {{ $t("contact.transportation.airport.title") }}
                </h3>
              </div>
              <p class="paragraph-2 mb-4 text-gray-600">
                {{ $t("contact.transportation.airport.description") }}
              </p>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:clock-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{
                    $t("contact.transportation.airport.distance")
                  }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon
                    name="ph:taxi-duotone"
                    class="h-4 w-4"
                  />
                  <span>{{
                    $t("contact.transportation.airport.options")
                  }}</span>
                </div>
              </div>
            </div>
          </AppCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional logic needed
</script>
