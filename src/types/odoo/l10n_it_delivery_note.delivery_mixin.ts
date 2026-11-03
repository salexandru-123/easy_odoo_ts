export interface TL10n_it_delivery_noteDelivery_mixin {
  delivery_carrier_id?: number | false;
  delivery_goods_appearance_id?: number | false;
  delivery_gross_weight?: number;
  delivery_gross_weight_uom_id?: number | false;
  delivery_net_weight?: number;
  delivery_net_weight_uom_id?: number | false;
  delivery_note?: string;
  delivery_packages?: number;
  delivery_transport_condition_id?: number | false;
  delivery_transport_datetime?: string;
  delivery_transport_method_id?: number | false;
  delivery_transport_reason_id?: number | false;
  delivery_volume?: number;
  delivery_volume_uom_id?: number | false;
}