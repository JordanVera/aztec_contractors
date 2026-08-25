import { Stagger, StaggerItem } from '@/components/motion';
import { SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import {
  getServicesByCategory,
  type ServiceCategoryId,
  serviceCategories,
} from '@/lib/services';

export function ServiceCategorySection({
  categoryId,
}: {
  categoryId: ServiceCategoryId;
}) {
  const category = serviceCategories.find((item) => item.id === categoryId);
  if (!category) return null;

  const items = getServicesByCategory(categoryId);

  return (
    <div id={categoryId}>
      <SectionHeading
        title={category.name}
        description={category.description}
      />
      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service) => (
          <StaggerItem key={service.slug}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
