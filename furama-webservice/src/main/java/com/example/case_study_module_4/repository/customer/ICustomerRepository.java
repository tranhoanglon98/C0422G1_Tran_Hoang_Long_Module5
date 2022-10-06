package com.example.case_study_module_4.repository.customer;

import com.example.case_study_module_4.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


@Transactional
public interface ICustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "SELECT * FROM khach_hang", nativeQuery = true, countQuery = "SELECT count(*) FROM khach_hang")
    Page<Customer> getAll(Pageable pageable);

    @Modifying
    @Query(value = "delete from khach_hang where ma_khach_hang = :id", nativeQuery = true)
    void deleteByQuery(@Param("id") int id);

    @Modifying
    @Query(value = "INSERT INTO `furama_resort`.`khach_hang` (\n" +
            "\t\t`ho_ten`, \n" +
            "\t\t`ngay_sinh`, \n" +
            "\t\t`gioi_tinh`, \n" +
            "\t\t`so_cmnd`, \n" +
            "\t\t`so_dien_thoai`, \n" +
            "\t\t`email`, `dia_chi`, \n" +
            "\t\t`ma_loai_khach`) \n" +
            "    VALUES (\n" +
            "        :name, \n" +
            "        :dayOfBirth, \n" +
            "        :gender, \n" +
            "        :idCard, \n" +
            "        :phoneNumber, \n" +
            "        :email, \n" +
            "        :address, \n" +
            "        :customerTypeId)", nativeQuery = true)

    void add(@Param("name") String name, @Param("dayOfBirth") String dayOfBirth, @Param("gender") boolean gender,
             @Param("idCard") String idCard, @Param("phoneNumber") String phoneNumber, @Param("email") String email,
             @Param("address") String address, @Param("customerTypeId") int customerTypeId);

    @Query(value = "UPDATE `khach_hang` \n" +
            "SET \n" +
            "    `ho_ten` = :name ,\n" +
            "    `ngay_sinh` = :dayOfBirth,\n" +
            "    `gioi_tinh` = :gender,\n" +
            "    `so_cmnd` = :idCard,\n" +
            "    `so_dien_thoai` = :phoneNumber,\n" +
            "    `email` = :email,\n" +
            "    `dia_chi` = :address,\n" +
            "    `ma_loai_khach` = :customerTypeId\n" +
            "WHERE\n" +
            "    (`ma_khach_hang` = :id)",nativeQuery = true)
    @Modifying
    void update(@Param("name") String name, @Param("dayOfBirth") String dayOfBirth, @Param("gender") boolean gender,
                @Param("idCard") String idCard, @Param("phoneNumber") String phoneNumber, @Param("email") String email,
                @Param("address") String address, @Param("customerTypeId") int customerTypeId, @Param("id") int id);
}
